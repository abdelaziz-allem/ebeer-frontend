"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const CureData = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [apiData, setApiData] = useState<any>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setApiData(null); // Reset API data when a new file is selected
      setUploadError(null); // Reset error state
    }
  };

  const uploadImage = async () => {
    if (!selectedImage) {
      setUploadError("No file selected.");
      return;
    }

    setIsUploading(true);
    setUploadError(null); // Clear previous errors

    try {
      const formData = new FormData();
      formData.append("file", selectedImage);

      const response = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Upload failed with status ${response.status}`);
      }

      const data = await response.json();
      console.log("API response:", data);
      setApiData(data);
    } catch (error) {
      console.error("Error uploading image:", error);
      setUploadError(error.message || "Something went wrong");
    } finally {
      setIsUploading(false);
    }
  };

  const renderSuggestions = (suggestions: any[] | undefined, type: string) => {
    if (!suggestions || suggestions.length === 0) {
      return <p>No {type} suggestions found.</p>;
    }

    return (
      <div className="space-y-4">
        {suggestions.map((suggestion, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>
                {suggestion.name.toUpperCase() || "Unknown"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Scientific Name: {suggestion.scientific_name || "N/A"}
              </p>

              <Badge className="bg-emerald-500 text-white font-bold text-md">
                {`${Math.round(suggestion.probability * 100)}%` || "N/A"}{" "}
              </Badge>

              {suggestion.similar_images &&
                suggestion.similar_images.length > 0 && (
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    {suggestion.similar_images.map(
                      (image: any, imgIndex: number) => (
                        <div
                          key={imgIndex}
                          className="flex flex-col items-center"
                        >
                          <img
                            src={image.url_small || image.url}
                            alt={image.citation || "Similar Image"}
                            className="w-full h-32 object-cover rounded-md"
                          />
                          <p className="text-xs mt-1 text-gray-500">
                            {image.citation || "Unknown source"}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                )}
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <Card className="w-full max-w-3xl mx-auto border-none shadow-none">
      <CardHeader>
        <CardTitle>Plant Disease Detection</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Upload className="w-10 h-10 mb-3 text-gray-400" />
              <p className="mb-2 text-sm text-gray-500">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500">
                PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <Input
              id="dropzone-file"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>
        </div>

        {selectedImage && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Selected Image</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src={URL.createObjectURL(selectedImage)}
                alt="Selected"
                className="w-full h-64 object-cover rounded-lg"
              />
            </CardContent>
          </Card>
        )}

        <button
          className="w-full py-2 px-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:bg-gray-400"
          onClick={uploadImage}
          disabled={isUploading || !selectedImage}
        >
          {isUploading ? "Uploading..." : "Upload Image"}
        </button>

        {uploadError && <p className="text-red-500 text-sm">{uploadError}</p>}

        {apiData && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Detected Disease</CardTitle>
                <audio controls src="/aisound.mp3">
                  Your browser does not support the
                  <code>audio</code> element.
                </audio>{" "}
              </CardHeader>
              <CardContent>
                {renderSuggestions(
                  apiData?.data?.result?.disease?.suggestions,
                  "disease"
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Detected Crop</CardTitle>
              </CardHeader>
              <CardContent>
                {renderSuggestions(
                  apiData?.data?.result?.crop?.suggestions,
                  "crop"
                )}
              </CardContent>
            </Card>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CureData;
