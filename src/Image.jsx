import { useParams } from "react-router-dom";

export default function Image() {
    const params = useParams();

    return (
        <div>
            <h1>Image</h1>
            <p>Image Page : {params['*']}</p>
        </div>
    )
}