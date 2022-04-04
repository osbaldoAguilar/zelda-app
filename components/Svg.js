function SvgComponent({name}) {
    console.log(name);
    return (
      <svg
      width="150px"
      height="60px"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      // {...props}
    >
      <path d="M256 59.72L142.687 256h226.625L256 59.72zM369.313 256L256 452.28h226.625L369.312 256zM256 452.28L142.687 256 29.376 452.28H256z" />
      <text x="-45" y="325" fill="#eae7d2" fontWeight='bold' fontSize='9em'>{name}</text>
    </svg>
    )
  }
  
  export default SvgComponent