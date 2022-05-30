export interface IconListsProps {
    color?: string
}

export const IconLists = (props: Partial<IconListsProps>) => {
    const {color} = props
    return <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.8889 10.6887H5.11111C3.94683 10.6887 3 11.6376 3 12.8044V21.267C3 22.4338 3.94683 23.3827 5.11111 23.3827H19.8889C21.0532 23.3827 22 22.4338 22 21.267V12.8044C22 11.6376 21.0532 10.6887 19.8889 10.6887ZM5.11111 21.267V12.8044H19.8889L19.891 21.267H5.11111ZM5.11111 6.4574H19.8889V8.57306H5.11111V6.4574ZM7.22222 2.22607H17.7778V4.34173H7.22222V2.22607Z" fill={color}/>
            </svg>

}