import React from 'react'

const table = () => {
  return (
    <>
   <table>
    <caption >My Expenses</caption>
    <thead>
                <tr>
                    {/* <th>&nbsp;</th>  */}
                    <th scope="col">Expense</th>
                    <th scope="col">Description</th>
                    <th scope="col">Category</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Date</th>
                </tr>
    </thead>
   </table>
   </>
  )
}

export default table