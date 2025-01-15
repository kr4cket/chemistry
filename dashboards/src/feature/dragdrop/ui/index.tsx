import { useState, FC } from "react";
import { useForm, Controller } from "react-hook-form";
import { Label } from "@/shared/ui/label";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { Alert } from "@/shared/ui/alert";

interface FormValues {
  files: File[];
}

export const DragDropCSVForm: FC = () => {
  const { control, handleSubmit, setValue, setError, clearErrors } =
    useForm<FormValues>({
      defaultValues: {
        files: [],
      },
    });

  const [dragActive, setDragActive] = useState(false);
  const [error, setErrorMessage] = useState<string | null>(null);

  const isCSVFile = (file: File) =>
    file.type === "text/csv" || file.name.endsWith(".csv");

  const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setDragActive(false);

    if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      const files = Array.from(event.dataTransfer.files);

      const invalidFiles = files.filter((file) => !isCSVFile(file));
      if (invalidFiles.length > 0) {
        setErrorMessage("Можно загружать только файлы CSV.");
        setError("files", { message: "Неподдерживаемый формат файла" });
        return;
      }

      clearErrors("files");
      setErrorMessage(null);
      setValue("files", files);
    }
  };

  const handleDrag = (
    event: React.DragEvent<HTMLDivElement>,
    isActive: boolean,
  ) => {
    event.preventDefault();
    event.stopPropagation();
    setDragActive(isActive);
  };

  const onSubmit = (data: FormValues) => {
    console.log("Отправленные данные:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Label>Загрузите CSV-файл</Label>
      <Controller
        name="files"
        control={control}
        render={({ field }) => (
          <div
            onDragEnter={(e) => handleDrag(e, true)}
            onDragLeave={(e) => handleDrag(e, false)}
            onDragOver={(e) => handleDrag(e, true)}
            onDrop={onDrop}
            className={`flex flex-col items-center justify-center w-96 h-80 border-2 border-dashed p-4 rounded-md transition-all ${
              dragActive
                ? "border-blue-800 bg-gray-100 dark:bg-gray-800"
                : "border-gray-300 dark:border-gray-700"
            }`}
          >
            {field.value.length > 0 ? (
              <ul>
                {field.value.map((file, index) => (
                  <li key={index} className="text-sm">
                    {file.name}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">Перетащите CSV-файл сюда.</p>
            )}
            <Input
              type="file"
              accept=".csv"
              multiple
              onChange={(e) => {
                if (e.target.files) {
                  const files = Array.from(e.target.files);

                  const invalidFiles = files.filter((file) => !isCSVFile(file));
                  if (invalidFiles.length > 0) {
                    setErrorMessage("Можно загружать только файлы CSV.");
                    setError("files", {
                      message: "Неподдерживаемый формат файла",
                    });
                    return;
                  }

                  clearErrors("files");
                  setErrorMessage(null);
                  setValue("files", files);
                }
              }}
              className="hidden"
            />
          </div>
        )}
      />

      {error && (
        <Alert
          variant="destructive"
          className="mb-2 bg-red-100 dark:bg-red-700"
        >
          <span className="dark:text-red-200"> {error}</span>
        </Alert>
      )}
      <Button className="w-full" type="submit">
        Отправить
      </Button>
    </form>
  );
};
