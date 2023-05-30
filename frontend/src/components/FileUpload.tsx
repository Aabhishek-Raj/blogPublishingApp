import {useState} from "react";
import { Plus } from '../assets'

const FileUpload = () => {

    const [image, setImage] = useState('')


  const content = (
    <div className="flex min-h-fit w-2 items-center justify-center bg-sky-400">
      <div className="rounded-md border border-gray-100 bg-white p-4 shadow-md">
        <label
          htmlFor="upload"
          className="flex flex-col items-center gap-2 cursor-pointer"
        >
            <img src={Plus} alt="" />
         
          <span className="text-gray-600 font-medium">Upload file</span>
        </label>
        <input id="upload"
        onChange={handleImage} 
        type="file" 
        name="file"  className="hidden" />
      </div>
    </div>
  );

  return content;
};

export default FileUpload;
