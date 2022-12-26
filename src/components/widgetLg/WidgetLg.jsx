import React from 'react';
import "./widgetLg.css";

const WidgetLg = () => {
  const Button = ({type}) => {
    return <button className={"widgetLgButton " + type}>{type}</button>
  }
  return (
    <div className='widgetLg'>
      <h3 className='widgetLgTitle'>Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://i.pravatar.cc/150?img=10" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Perry Scope</span>
          </td>
          <td className="widgetLgDate">2 Jun 2022</td>
          <td className="widgetLgAmount">₹120.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://i.pravatar.cc/150?img=11" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Del Phineum</span>
          </td>
          <td className="widgetLgDate">2 Jun 2022</td>
          <td className="widgetLgAmount">₹120.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://i.pravatar.cc/150?img=12" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Percy Kewshun</span>
          </td>
          <td className="widgetLgDate">2 Jun 2022</td>
          <td className="widgetLgAmount">₹120.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://i.pravatar.cc/150?img=13" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Karen Onnabit</span>
          </td>
          <td className="widgetLgDate">2 Jun 2022</td>
          <td className="widgetLgAmount">₹120.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  )
}

export default WidgetLg