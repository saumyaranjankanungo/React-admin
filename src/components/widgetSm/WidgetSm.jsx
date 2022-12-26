import React from 'react';
import "./widgetSm.css";
import { Visibility } from '@mui/icons-material';

const WidgetSm = () => {
  return (
    <div className='widgetSm'>
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
                <img src="https://i.pravatar.cc/150?img=3" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Jack Aranda</span>
                    <span className="widgetSmUserTitle">Test Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon' />
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://i.pravatar.cc/150?img=4" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Pat Thettick</span>
                    <span className="widgetSmUserTitle">UI Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon' />
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://i.pravatar.cc/150?img=5" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Rita Book</span>
                    <span className="widgetSmUserTitle">Test Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon' />
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://i.pravatar.cc/150?img=6" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Greg Arias</span>
                    <span className="widgetSmUserTitle">UI Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon' />
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://i.pravatar.cc/150?img=7" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Simon Sais</span>
                    <span className="widgetSmUserTitle">Test Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon' />
                    Display
                </button>
            </li>
        </ul>
    </div>
  )
}

export default WidgetSm