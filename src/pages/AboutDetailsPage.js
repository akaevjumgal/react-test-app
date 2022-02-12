import { useEffect, useState } from "react"
import { Outlet, useNavigate, useParams, useSearchParams } from "react-router-dom"

const STATUSES = {
    WARNING: 'WARNING',
    ERROR: 'ERROR',
    INFO: 'INFO',
    SUCCESS: 'SUCCESS'
}

const STATUS_MESSAGES = {
    [STATUSES.INFO]: <h1>Info</h1>,
    [STATUSES.SUCCESS]: <h1>Success</h1>,
    [STATUSES.ERROR]: <h1>Error</h1>,
    [STATUSES.WARNING]: <h1>Warning</h1>,
}

export default function AboutDetailsPage() {
    const params = useParams()
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    const [status, setStatus] = useState(STATUSES.SUCCESS)
    const [rangeValue, setRangeValue] = useState(5)
    const [photo, setPhoto] = useState()

    const query = Object.fromEntries([...searchParams])

    useEffect(() => {
        if (query.isAuth === "false") {
            navigate('/about', { replace: true })
        }
        setSearchParams({
            ...query,
            isUser: false,
        })
    }, [])

    const onSelectStatus = (event) => {
        const [{ value: selectedStatus }] = event.target.selectedOptions
        setStatus(selectedStatus)
    }

    const onUpload = (event) => {
        const [uploadedPhoto] = event.target.files
        setPhoto(URL.createObjectURL(uploadedPhoto))
    }

    const styles = {
        padding: "0.5rem 1rem",
        border: '1px solid seagreen',
        borderRadius: '6px'
    }

    const selectStyles = {
        padding: '1rem',
        background: 'aquamarine',
    }
    
    return (
        <div>Details Page {params.aboutId}
            <div style={{ display: 'flex' }}>
                {Object.keys(STATUSES).map((statusValue) => (
                    <div 
                        style={styles} 
                        key={statusValue}
                        onClick={() => setStatus(statusValue)}
                    >
                        {statusValue.toLowerCase()}
                    </div>
                ))}
            </div>
            <select style={selectStyles} value={status} onChange={onSelectStatus}>
                <option value={STATUSES.INFO}>
                    {STATUSES.INFO.toLowerCase()}
                </option>
                <option value={STATUSES.ERROR}>
                    {STATUSES.ERROR.toLowerCase()}
                </option>
                <option value={STATUSES.SUCCESS}>
                    {STATUSES.SUCCESS.toLowerCase()}
                </option>
                <option value={STATUSES.WARNING}>
                    {STATUSES.WARNING.toLowerCase()}
                </option>
            </select>
            {STATUS_MESSAGES[status]}
            <fieldset>
                <legend>Checkbox</legend>
                <label className="checkbox">
                    <input type="checkbox" />
                </label>
                <label className="checkbox">
                    <input type="checkbox" />
                </label>
            </fieldset>
    
            <fieldset>
                <legend>Radio</legend>
                <input name="radio" type="radio" />
                <input name="radio" type="radio" />
            </fieldset>

            <fieldset>
                <legend>File Upload</legend>
                <input type="file" onChange={onUpload} />
                {photo && <img src={photo} alt="no photo" />}
            </fieldset>
            
            <fieldset>
                <legend>Email and Password</legend>
                <input type="password" />
                <input type="email" />
            </fieldset>

            <fieldset>
                <legend>Range Slider</legend>
                <input
                    value={rangeValue} 
                    type="range" 
                    min="5" 
                    max="10" 
                    onChange={(event) => setRangeValue(event.target.value)} 
                />
                {rangeValue}
            </fieldset>

            <Outlet />
        </div>
    )
}