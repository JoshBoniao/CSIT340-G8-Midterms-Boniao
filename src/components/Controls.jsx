function Controls ({handle, label}) {
    return (
        <button className="cursor-pointer rounded-lg bg-[#5C766D] px-8 py-3 text-xl font-bold text-[#EDE9E6]" 
        onClick={handle}>
              {label}
            </button>
    )
}
export default Controls