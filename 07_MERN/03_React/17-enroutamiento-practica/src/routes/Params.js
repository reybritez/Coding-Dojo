import { useParams } from "react-router-dom";
const Params = () => {
    const { param, textColor, bgColor } = useParams();
    console.log("this.param:",  param )
    console.log(param);
    console.log(textColor);
    console.log(bgColor)

    const flag = isNaN(param);
    return (
        <>
            {
                flag ? <h2 style={{
                    color: textColor,
                    backgroundColor: bgColor
                }}>
                            The word is: {this.param}
                        </h2> 
                        : 
                        <h2 style={{
                            color: textColor,
                            backgroundColor: bgColor
                        }}>
                            The number is: {param}
                        </h2>
            }
        </>
    );
};
export default Params;