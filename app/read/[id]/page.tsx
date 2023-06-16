type ReadProps = {
    params : {
        id: String
    }
}
export default function Read(props: ReadProps){
    console.log("props", props.params.id);
    return <>Read!!{props.params.id}</>
}