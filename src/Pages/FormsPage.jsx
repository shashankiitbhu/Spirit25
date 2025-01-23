import React from "react";

const FormsPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold text-blue-500 mb-8">Registration Forms</h1>

            {/* Form 1 */}
            <iframe
                src="https://docs.google.com/forms/d/1A8M6fJydnSblKb1VtV1XWPF3J5ITu4XND5iBq1u7V6Q/edit"
                title="Form 1"
                className="w-full max-w-3xl h-96 mb-8 border-2 border-blue-400"
                allowFullScreen
            ></iframe>
            
            {/* Form 2 */}
            <iframe
                src="https://docs.google.com/forms/d/1dvTAZSh_jtvVyS5poimTFr2mw6Kzy-wINGPuHOSt4lQ/viewform"
                title="Form 2"
                className="w-full max-w-3xl h-96 mb-8 border-2 border-blue-400"
                allowFullScreen
            ></iframe>
            
            {/* Form 3 */}
            <iframe
                src="https://docs.google.com/forms/d/1aa9bgY87pw3Kiz4X07jrgEuS_JJKBm9ojpTn8fSvdlg/viewform"
                title="Form 3"
                className="w-full max-w-3xl h-96 mb-8 border-2 border-blue-400"
                allowFullScreen
            ></iframe>

            {/* Form 4 */}
            <iframe
                src="https://docs.google.com/forms/d/1s3ETYjJddjoyvQHjVGKQwdMPHmhocl4AS1j1xCmO_T8/viewform"
                title="Form 4"
                className="w-full max-w-3xl h-96 mb-8 border-2 border-blue-400"
                allowFullScreen
            ></iframe>


        </div>
    );
};

export default FormsPage;
