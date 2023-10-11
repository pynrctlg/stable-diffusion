export default function Input(props) {
    const { type, placeholder, touched, errorMessage, ...inputProps } = props;
    return (
        <div className="w-full">
            <label className="cursor-text relative block">
                <input type={type} className={`h-14 w-full border  outline-none px-4 peer rounded-md ${errorMessage && touched ? 'border-danger' : 'border-primary'}`} {...inputProps} required />
                {type !== 'datetime-local' && type !== 'date' ?
                    (
                        <span className="transition-all absolute left-0 top-0 px-4 text-sm h-full flex items-center peer-focus:h-5 peer-focus:text-xs peer-valid:h-5 peer-valid:text-xs">{placeholder}</span>
                    ) :
                    ('')
                }
                {
                    touched && errorMessage ?
                        (
                            <span className="absolute bottom-1 right-1 text-[10px] text-danger">{errorMessage}</span>
                        )
                        :
                        ('')
                }
            </label>
        </div >
    )
}