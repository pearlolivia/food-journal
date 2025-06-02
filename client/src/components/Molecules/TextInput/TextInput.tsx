/*
add to boilerplate
 */
const TextInput = ({ inputValue, handleChange, label, type = 'text', required, containerClass = '', inputClass = '' }: {
    inputValue: string
    handleChange: (v: string) => void
    type?: string
    label?: string
    required?: boolean
    containerClass?: string
    inputClass?: string
}) => {
    return (
        <div className={`${containerClass}`}>
            {label && (
                <label className='text-sm text-neutral-500'>
                    {label} {required && <span className='text-red-500'>*</span>}
                </label>
            )}
            <input
                className={`border rounded-lg p-1 ${inputClass}`}
                value={inputValue}
                onChange={(v) => handleChange(v.target.value)}
                type={type}
            />
        </div>
    )
}

export default TextInput