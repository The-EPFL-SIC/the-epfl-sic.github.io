import '../styles/components/SwitchButton.css'


function SwitchButton({
    option1,
    option2,
    selectedOption,
    handleOptionSwitchCallBack
}) {
    return (
        <div className="switch-button" selected-option={selectedOption}>
            <p onClick={() => handleOptionSwitchCallBack(0)}>{option1}</p>
            <p onClick={() => handleOptionSwitchCallBack(1)}>{option2}</p>
            <div></div>
        </div>
    )
}



export default SwitchButton