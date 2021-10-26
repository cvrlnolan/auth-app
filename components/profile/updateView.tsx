import React, { useState, Fragment, createRef } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import Compressor from "compressorjs";
import profilePic from "public/photo.jpg";
import { FaCamera } from "react-icons/fa";

const UpdateView = () => {
  let [isOpen, setIsOpen] = useState(false);

  const [image, setImage] = useState<File | Blob>();

  const [preview, setPreview] = useState<string>();

  const imageRef = createRef<HTMLInputElement>();

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const handleImageChange = (e: any) => {
    if (e.target.files[0]) {
      const img = e.target.files[0];
      new Compressor(img, {
        quality: 0.8,
        success: (compressedImage) => {
          setImage(compressedImage);
          setPreview(URL.createObjectURL(compressedImage));
        },
      });
    }
  };

  return (
    <>
      <div className="flex flex-col p-6 w:full md:w-4/5 mx-auto mt-10 space-y-4 border-2 border-gray-300 rounded-lg">
        <p className="text-2xl font-bold">Change Info</p>
        <p className="tracking-tight text-gray-600">
          Changes will be reflected to every services
        </p>
        <div
          className="flex space-x-8 cursor-pointer w-full md:w-1/2"
          onClick={() => openModal()}
        >
          <div className="relative filter brightness-75 contrast-100 saturate-150 drop-shadow-lg">
            <Image
              alt="profile_pic"
              src={profilePic}
              width="75"
              height="75"
              objectFit="cover"
              placeholder="blur"
              className="rounded-lg"
            />
            <div className="absolute w-full h-full inset-y-7 inset-x-7 bg-transparent">
              <FaCamera className="w-5 h-5 text-white" />
            </div>
          </div>
          <p className="uppercase text-gray-600 my-auto">Change Photo</p>
        </div>
        <label className="text-gray-600">Name</label>
        <input
          className="w-full md:w-4/5 lg:w-1/2 p-4 rounded-lg border border-gray-400 shadow text-sm leading-tight focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none transition duration-300"
          placeholder="Enter your name..."
        />
        <label className="text-gray-600">Bio</label>
        <input
          className="w-full md:w-4/5 lg:w-1/2 h-28 p-4 rounded-lg border border-gray-400 shadow text-sm leading-tight focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none transition duration-300"
          placeholder="Enter your bio..."
        />
        <label className="text-gray-600">Phone</label>
        <input
          className="w-full md:w-4/5 lg:w-1/2 p-4 rounded-lg border border-gray-400 shadow text-sm leading-tight focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none transition duration-300"
          placeholder="Enter your phone..."
        />
        <label className="text-gray-600">Email</label>
        <input
          className="w-full md:w-4/5 lg:w-1/2 p-4 rounded-lg border border-gray-400 shadow text-sm leading-tight focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none transition duration-300"
          placeholder="Enter your email..."
        />
        <label className="text-gray-600">Password</label>
        <input
          className="w-full md:w-4/5 lg:w-1/2 p-4 rounded-lg border border-gray-400 shadow text-sm leading-tight focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none transition duration-300"
          placeholder="Enter your password..."
        />
        <button className="w-1/3 lg:w-1/4 px-4 py-2 bg-blue-400 hover:bg-blue-500 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 text-white rounded-lg transition duration-300">
          Save
        </button>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Change profile picture
                </Dialog.Title>
                <div className="block mt-2 space-y-4">
                  <input
                    ref={imageRef}
                    type="file"
                    hidden
                    onChange={handleImageChange}
                  />
                  <div className="flex w-full">
                    <button
                      onClick={() => imageRef.current?.click()}
                      className="px-4 mx-auto py-2 bg-blue-400 hover:bg-blue-500 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:outline-none text-white rounded-lg transition duration-300"
                    >
                      Choose photo
                    </button>
                  </div>
                  <p className="uppercase text-center font-medium">or</p>
                  <input
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-400 shadow text-sm leading-tight focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none transition duration-300"
                    placeholder="Enter your image URL.."
                  />
                </div>

                <div className="flex mt-4 space-x-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    // onClick={closeModal}
                  >
                    Upload
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default UpdateView;
