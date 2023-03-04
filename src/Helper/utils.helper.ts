interface ExportProps {
  data: Blob;
  fileName: string;
  contentType: string;
}

export const handleDowloadFile = (props: ExportProps) => {
  const blob = new Blob([props?.data], {
    type: props?.contentType || "application/json;charset=utf-8",
  });
  const blobUrl = URL.createObjectURL(blob);
  const link = document.createElement("a"); // Or maybe get it from the current document
  link.href = blobUrl;
  link.setAttribute("download", props?.fileName || "Nguyen Duc Quang.pdf"); // or any other extension
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(blobUrl);
};

export const openPDF = (url: string) => {
  const link = document.createElement("a");
  link.href = url;
  link.download = "file.pdf";
  link.dispatchEvent(new MouseEvent("click"));
};
