import React, { useContext, useState } from 'react'
import withAuth from '../utils/withAuth'
import { useNavigate } from 'react-router-dom'
import "../App.css";
import { Button, TextField } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import VideocamIcon from '@mui/icons-material/Videocam';
import { AuthContext } from '../contexts/AuthContext';

function HomeComponent() {

    let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");

    const { addToUserHistory } = useContext(AuthContext);
    let handleJoinVideoCall = async () => {
        await addToUserHistory(meetingCode)
        navigate(`/${meetingCode}`)
    }

    return (
        <>

            <div className="navBar">

                <div style={{ display: "flex", alignItems: "center" }}>
                    <h2>FaceTime Video Call</h2>
                </div>

                <div className="navBarActions">
                   <Button
    onClick={() => {
        navigate("/history");
    }}
    startIcon={<RestoreIcon />}
    sx={{ ml: 1, color: "#ea580c" }}
>
    History
</Button>

                    <Button
                        onClick={() => {
                            localStorage.removeItem("token")
                            navigate("/auth")
                        }}
                        sx={{ ml: 1, color: '#ea580c' }}
                    >
                        Logout
                    </Button>
                </div>

            </div>


            <div className="meetContainer">
                <div className="leftPanel">
                    <div>
                        <div className="heroBadge">
                            <VideocamIcon sx={{ fontSize: 16 }} />
                            Video calling made simple
                        </div>

                        <h2>Providing Quality Video Call Just Like Quality Education</h2>

                        <p className="heroSubtext">
                            Start an instant meeting or join with a code — crisp video, real-time chat,
                            and screen sharing, all in one place.
                        </p>

                        <div style={{ display: 'flex', gap: "10px", alignItems: "flex-start" }}>

                            <TextField
                                onChange={e => setMeetingCode(e.target.value)}
                                id="outlined-basic"
                                label="Meeting Code"
                                variant="outlined"
                                sx={{
                                    minWidth: 240,
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: 2,
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#ea580c',
                                        },
                                    },
                                    '& label.Mui-focused': {
                                        color: '#ea580c',
                                    },
                                }}
                            />
                            <Button
                                onClick={handleJoinVideoCall}
                                variant='contained'
                                size="large"
                                sx={{
                                    bgcolor: '#ea580c',
                                    px: 4,
                                    borderRadius: 2,
                                    fontWeight: 600,
                                    boxShadow: '0 4px 14px rgba(234, 88, 12, 0.35)',
                                    '&:hover': { bgcolor: '#c2410c' },
                                }}
                            >
                                Join
                            </Button>

                        </div>
                    </div>
                </div>
                <div className='rightPanel'>
                    <div className="heroGlow" />
                    <img srcSet='/logo3.png' alt="" />
                </div>
            </div>
        </>
    )
}


export default withAuth(HomeComponent)