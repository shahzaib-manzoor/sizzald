
import { Typography } from "@mui/material";
import frame from "../assets/Frame.png";

export const NotFound = () => {
    return (
        <div
            style={{ display: 'flex', justifyContent: "center", width: '100%', height: '50vh', }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ width: '80%', alignItems: 'center', display:'flex',flexDirection:'column' }}>
                    <img style={{
                        height: '100%',
                        width: '100%',
                        objectFit: 'contain',
                    }} src={frame} alt="" />
                    <Typography sx={{ color: 'white' }}>
                        Ooh! Page not found

                    </Typography>

                </div>
            </div>

        </div>
    )
}
