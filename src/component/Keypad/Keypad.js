import React, { Component } from 'react';
import styles from './keyPad.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class NumberInput extends Component {

    onKeyPress = (e) => {
      if(e.key==='Enter' || e.key==='='){
          this.props.handleResultClick();
      }
      else if(e.keyCode===27) {
        console.log('ESC')
      }
    }

    render() {
        const {value,onChange,handleResultClick,result,handleButtonClick} = this.props;
        return (
            <div>
                {result}
            <div className={cx('key-pad')}>
                <input onChange={onChange}
                 value={value}
                 onKeyPress={this.onKeyPress}
                 //하위 컴포넌트는 onChange라고 써야함 
                 ></input>
                 <div>
                <button name="1" onClick={(e)=>handleButtonClick(e.target.name)}>1</button>
                <button name="2" onClick={(e)=>handleButtonClick(e.target.name)}>2</button>
                <button name="3" onClick={(e)=>handleButtonClick(e.target.name)}>3</button>
                <button name="+" onClick={(e)=>handleButtonClick(e.target.name)}
                //handleButtonClick 메소드에 파라미터가 필요하기 때문에 화살표 함수로 함수 새로 생성
                >+</button>
                <button name="4" onClick={(e)=>handleButtonClick(e.target.name)}>4</button>
                <button name="5" onClick={(e)=>handleButtonClick(e.target.name)}>5</button>
                <button name="6" onClick={(e)=>handleButtonClick(e.target.name)}>6</button>
                <button name="-" onClick={(e)=>handleButtonClick(e.target.name)}>-</button>
                <button name="7" onClick={(e)=>handleButtonClick(e.target.name)}>7</button>
                <button name="8" onClick={(e)=>handleButtonClick(e.target.name)}>8</button>
                <button name="9" onClick={(e)=>handleButtonClick(e.target.name)}>9</button>
                <button name="*" onClick={(e)=>handleButtonClick(e.target.name)}>*</button>
                <button name="C" onClick={(e)=>handleButtonClick(e.target.name)}>C</button>
                <button name="0" onClick={(e)=>handleButtonClick(e.target.name)}>0</button>
                <button name="=" onClick={handleResultClick}>=</button>
                <button name="/" onClick={(e)=>handleButtonClick(e.target.name)}>/</button>
                </div>
            </div>
          </div>

        );
    }
}

export default NumberInput;

