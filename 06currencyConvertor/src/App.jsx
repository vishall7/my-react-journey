import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo.js'
import {InputBox} from './components'

function App() {  
  
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd"); 
  const [to, setTo] = useState("inr"); 
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from); // from means usd, inr and more currencies  

  const options = Object.keys(currencyInfo); // options is an array of keys from result(inr,usd) 

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]) // to is also a value(inr, usd)
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `https://www.pexels.com/photo/a-view-of-mountains-and-valleys-at-sunset-25039669/`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}                           
                            onAmountChange={(amount) => setAmount(amount)}
                            selectCurrency={from}                            
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}                            
                            selectCurrency={to}
                            amountDisable
                        />  
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert 
                    </button>
                </form>
            </div>
        </div>
    </div>
  );
}

export default App
