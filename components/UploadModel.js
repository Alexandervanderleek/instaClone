import React from 'react'
import { useRecoilState } from 'recoil'
import { modalState } from '../atom/modalAtom'
import Modal from "react-modal"

export default function UploadModel() {
  const [open, setOpen] =  useRecoilState(modalState);
  return (
    <div>
     
     {open && ( 
        <Modal
        className="max-w-lg w-[90%] h-[300px] left-[50%] translate-x-[-50%] absolute top-56 bg-white border-2 rounded-md shadow-md"
        isOpen={open}
        onRequestClose={()=>setOpen(false)}
        >
            <div className="flex flex-col justify-center items-center h-[100%]">
                <h1>Hello</h1>
            </div>
        </Modal>

      )}
    </div>
  )
}
