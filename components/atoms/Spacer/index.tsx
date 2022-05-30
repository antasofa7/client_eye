export interface SpacerProps {
    height?: number,
    width?: number
}

const Spacer = (props: Partial<SpacerProps>) => {
    const {height, width} = props;
  return (
    <div style={{height: height, width: width}}/>
  )
}

export default Spacer