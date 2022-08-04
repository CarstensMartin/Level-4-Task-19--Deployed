import React,{useState} from 'react'

function Calculator() {
    // Declare state and variables
    const [cartAmount, setCartAmount] = useState(0);
    const [months, setMonths] = useState(0);
    let interest = (20/100/12);


    // Calculate the repayment amount
    function Repayment(){
        // Repayment formula
        let repayment = (cartAmount * interest * Math.pow((1+interest), months))/ (Math.pow((1+interest), months) - 1);
        return(repayment)
    }

    // Return table with data
  return (
    <div>
        <center>
        <table>
            <tbody>
                <tr>
                    <td>
                        Cart Amount
                    </td>
                    <td>
                        <input value={cartAmount}   name="cartAmount" onChange={e => setCartAmount(e.target.value.replace(/\D/g, '')) } />
                    </td>
                </tr>
                <tr>
                    <td>
                        Repayment Months
                    </td>
                    <td>
                        <input value={months}   name="months" onChange={e => setMonths(e.target.value.replace(/\D/g, '')) } />
                    </td>
                </tr>
                <tr>
                    <td>Interest Rate</td>
                    <td>20%</td>
                </tr>
                <tr>
                    <td>Monthly Repayment:</td>
                    <td>R { (Math.round(Repayment() * 100) / 100).toString()}</td>
                </tr>
                <tr>
                    <td>Total Repayment:</td>
                    <td>R { (Math.round(Repayment() * 100 * months) / 100).toString()}</td>
                </tr>
            </tbody>
        </table>
        </center>
    </div>
  )
}

export default Calculator