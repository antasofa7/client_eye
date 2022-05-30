export interface IconCampaignsProps {
    color?: string
}

export const IconCampaigns = (props: Partial<IconCampaignsProps>) => {
    const {color} = props
    return <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 15.487C4 15.487 5 14.4848 8 14.4848C11 14.4848 13 16.4892 16 16.4892C19 16.4892 20 15.487 20 15.487V3.46114C20 3.46114 19 4.46329 16 4.46329C13 4.46329 11 2.45898 8 2.45898C5 2.45898 4 3.46114 4 3.46114V15.487Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 22.5019V15.4868" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

}

