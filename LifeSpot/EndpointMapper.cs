using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using System.IO;
using System.Text;

namespace LifeSpot
{
    public static class EndpointMapper
    {
        /// <summary>
        ///  Маппинг CSS-файлов
        /// </summary>
        public static void MapCss(this IEndpointRouteBuilder builder)
        {
            var cssFiles = new[] { "index.css" };

            foreach (var fileName in cssFiles)
            {
                builder.MapGet($"/Static/CSS/{fileName}", async context =>
                {
                    var cssPath = Path.Combine(Directory.GetCurrentDirectory(), "Static", "CSS", fileName);
                    var css = await File.ReadAllTextAsync(cssPath);
                    await context.Response.WriteAsync(css);
                });
            }
        }

        /// <summary>
        ///  Маппинг JS
        /// </summary>
        public static void MapJs(this IEndpointRouteBuilder builder)
        {
            var jsFiles = new[] {
                "index.js",
                "testing.js",
                "about.js"
            };

            foreach (var fileName in jsFiles)
            {
                builder.MapGet($"/Static/JS/{fileName}", async context =>
                {
                    var jsPath = Path.Combine(Directory.GetCurrentDirectory(), "Static", "JS", fileName);
                    var js = await File.ReadAllTextAsync(jsPath);
                    await context.Response.WriteAsync(js);
                });
            }
        }

        /// <summary>
        ///  Маппинг Html-страниц
        /// </summary>
        public static void MapHtml(this IEndpointRouteBuilder builder)
        {
            HtmlReplaceArgs replaceElements = new();
            replaceElements.AddSharedElement("<!--SIDEBAR-->", "sidebar.html");
            replaceElements.AddSharedElement("<!--FOOTER-->", "footer.html");
            replaceElements.AddSharedElement("<!--SLIDER-->", "slider.html");

            builder.MapGetView("/", "index.html", replaceElements);
            builder.MapGetView("/testing", "testing.html", replaceElements);
            builder.MapGetView("/about", "about.html", replaceElements);
        }
        private static void MapGetView(this IEndpointRouteBuilder builder, string webPath, string fileName, HtmlReplaceArgs replaceArgs = null)
        {
            builder.MapGet(webPath, async context =>
            {
                var viewPath = Path.Combine(Directory.GetCurrentDirectory(), "Views", fileName);
                var viewText = await File.ReadAllTextAsync(viewPath);

                // Загружаем шаблон страницы, вставляя в него элементы
                var html = new StringBuilder(await File.ReadAllTextAsync(viewPath));
                if ((replaceArgs != null)
                    &&
                    (replaceArgs.ReplacemantPairs.Count > 0))
                {
                    foreach (var item in replaceArgs.ReplacemantPairs)
                    {
                        html.Replace(item.Key, item.Value);
                    }
                }

                await context.Response.WriteAsync(html.ToString());
            });

        }

        public static void MapImages(this IEndpointRouteBuilder builder)
        {
            // Map a custom route to serve the image using MapGet.
            builder.MapGet("/img/{imageName}", async context =>
            {
                // Get the imageName from the route values.
                var imageName = context.Request.RouteValues["imageName"] as string;

                // Construct the path to the image on your server.
                var imagePath = Path.Combine(Directory.GetCurrentDirectory(), "Static", "Img", imageName);

                // Serve the image file as-is.
                await context.Response.SendFileAsync(imagePath);
            });
        }
    }
}
