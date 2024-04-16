var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors();
var app = builder.Build();
app.UseCors(
    options =>
        options
         .AllowAnyHeader()
         .AllowAnyOrigin()
         .AllowAnyMethod()
);

app.MapGet("/", () => "Hello World!");
app.MapPost("/imageUpload", (HttpRequest request) => {
    Console.WriteLine(request.Form.Files.Count());
    foreach (var file in request.Form.Files)
    {
        Console.WriteLine(file);
        string fileName = file.FileName;
        using (var fileStream = new FileStream(fileName, FileMode.Create)) // "take the file we receive, and copy it to the file system"
        {
            file.CopyTo(fileStream);
        }
    }
});

app.Run();
