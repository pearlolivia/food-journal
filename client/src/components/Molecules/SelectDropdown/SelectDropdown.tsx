import { Fragment } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { twMerge } from 'tailwind-merge'

import { ChevronUpDownIcon } from '@heroicons/react/24/outline'

const SelectDropdown = ({ label, required, options, inputValue, handleChange, placeholder }: {
    options: any[]
    inputValue: string
    handleChange: (value: any) => void
    label?: string
    required?: boolean
    placeholder?: string
}) => {
    
    return (
        <div>
            {label && (
                <label>
                    {label} {required && <span className='text-red-500'>*</span>}
                </label>
            )}
            <Combobox
                value={options?.find((option) => option.value === inputValue) ?? ''}
                onChange={(option: any) => handleChange(option.value)}
            >
                <div className='relative text-left cursor-default focus:outline-none'>
                    <Combobox.Input
                        placeholder={placeholder ?? 'Select...'}
                        className='ring-opacity-25'
                        displayValue={(option: any) => option.text}
                        required={required}
                        readOnly
                    />
                    <Combobox.Button className='absolute inset-y-0 right-0 flex items-center pr-2'>
                        <ChevronUpDownIcon className='w-5 h-5 text-gray-400' aria-hidden='true' />
                    </Combobox.Button>
                </div>
                <div className='relative z-20 w-full'>
                    <Transition
                        as={Fragment}
                        leave='transition ease-in duration-100'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <Combobox.Options
                            className='absolute w-full py-1 my-2 overflow-auto max-h-64 rounded-sm bg-white focus:outline-none'
                        >
                            {options?.map((option) => (
                                <Combobox.Option
                                    key={option.value}
                                    value={option}
                                    className={({ active }) =>
                                        twMerge(
                                            'relative cursor-default select-none py-2 px-3',
                                            active ? 'bg-brand-400 text-white' : 'text-neutral-700',
                                            option.value === inputValue && 'bg-brand-600 text-white'
                                        )
                                    }
                                >
                                    {option.text}
                                </Combobox.Option>
                            ))}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}

export default SelectDropdown