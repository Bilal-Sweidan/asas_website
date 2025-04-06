// social media hooks
import { useState } from "react"
import useSocialMedia from "../../../../hooks/useSocialMedia"
export default function SocialMedia() {
    const { socialMedia, isLoading, error, changeSocialMediaData } = useSocialMedia()

    const [changed, setChanged] = useState(false)

    const handleSubmit = (e) => {
        const form = e.target
        const formData = new FormData(form)
        const formJson = Object.fromEntries(formData.entries())
        changeSocialMediaData(formJson)
    }
    return (
        <div>
            <h5 className='text-capitalize'>social media</h5>
            <form action="" method="dialog" className='form' onChange={() => setChanged(true)} onSubmit={handleSubmit}>
                <label htmlFor="" className='text-capitalize mt-2'>email</label>
                <input type="text" name="email" className='form-control w-50' defaultValue={socialMedia?.email} />

                <label htmlFor="" className='text-capitalize mt-2'>facebook</label>
                <input type="text" name="facebook" className='form-control w-50' defaultValue={socialMedia?.facebook} />

                <label htmlFor="" className='text-capitalize mt-2'>instagram</label>
                <input type="text" name="instagram" className='form-control w-50' defaultValue={socialMedia?.instagram} />

                <label htmlFor="" className='text-capitalize mt-2'>youtube</label>
                <input type="text" name="youtube" className='form-control w-50' defaultValue={socialMedia?.youtube} />

                <label htmlFor="" className='text-capitalize mt-2'>telegram</label>
                <input type="text" name="telegram" className='form-control w-50' defaultValue={socialMedia?.telegram} />
                <hr />
                <div className='d-flex justify-content-end align-items-center'>
                    <input type="submit" value="Save changes" disabled={!changed} className='btn btn-success text-capitalize' />
                </div>
            </form>
        </div>
    )
}
