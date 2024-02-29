
function DropDown({title,options,func}) {
  return (
   
          <div className="select">
            <select defaultValue='0' onChange={func} name='formate' id='formate'>
                <option value='0' disabled>
                     {title}
                </option>
               {options.map((item,index)=>(
                <option key={index} value={item} >{item.toUpperCase()}</option>
               ))}
            </select>
        </div>

  )
}

export default DropDown