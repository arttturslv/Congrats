import { fileToURL } from "../../../hooks/Images";

export default function ImagesInputPreview({ files, imageUpload, imageRemove, CustomStyle, individualInputRef }) {
  const array = [0, 1, 2];
  return (
    <div className={`${CustomStyle} flex justify-around transition-all max-w-[470px]`}>
      {array.map((file, index) => {
        return (
          <div key={index} className="w-[30%] h-[40vw] flex flex-col max-h-48 border-redHighlight border-4 ">
            {files[index] ? (
              <>
                <div className="w-full flex-1 overflow-hidden border-b-4 border-redHighlight">
                  <img
                    src={fileToURL(files[index])}
                    className="h-[100%] w-full object-cover"
                    alt=""
                  />
                </div>
                <div
                  onClick={() => imageRemove(index)}
                  className="w-full h-6 hover:bg-redHighlight cursor-pointer hover:text-dark transition-colors"
                >
                  <p className="text-center text-xs py-1">Apagar</p>
                </div>
              </>
            ) : (
              <div key={index} className="w-full h-full ">
                <label
                  htmlFor="fileInputIndividual"
                  className="h-[100%] w-full flex justify-center items-center text-white cursor-pointer"
                >
                  <p className="text-4xl font-zig text-redHighlight">+</p>
                </label>
                <input
                  ref={individualInputRef}
                  className="opacity-1 absolute h-[0px] w-[0px] -z-50"
                  id="fileInputIndividual"
                  type="file"
                  name="fileInputIndividual"
                  accept="image/*"
                  required={files.length<=0}
                  onChange={(e) => imageUpload(e, index)}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
