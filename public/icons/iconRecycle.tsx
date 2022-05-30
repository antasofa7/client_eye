export interface IconRecycleProps {
    color?: string
}

export const IconRecycle = (props: Partial<IconRecycleProps>) => {
    const {color} = props
    return <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6.78223H5H21" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 6.78255V4.77824C8 4.24666 8.21071 3.73686 8.58579 3.36097C8.96086 2.98509 9.46957 2.77393 10 2.77393H14C14.5304 2.77393 15.0391 2.98509 15.4142 3.36097C15.7893 3.73686 16 4.24666 16 4.77824V6.78255M19 6.78255V20.8127C19 21.3443 18.7893 21.8541 18.4142 22.23C18.0391 22.6059 17.5304 22.817 17 22.817H7C6.46957 22.817 5.96086 22.6059 5.58579 22.23C5.21071 21.8541 5 21.3443 5 20.8127V6.78255H19Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 11.7935V17.8064" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 11.7935V17.8064" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

}
