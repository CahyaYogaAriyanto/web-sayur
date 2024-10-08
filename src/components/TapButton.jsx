import './TapButton.css';
export default function TapButton ({isSelected,onSelect,children}){
    return(
        <div className='button-t'>
            <button className={isSelected ? 'active' :undefined} onClick={onSelect}>{children}</button>
        </div>
    );
}''