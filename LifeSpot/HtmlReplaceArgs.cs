using System.Collections.Generic;
using System.IO;

namespace LifeSpot
{
    public class HtmlReplaceArgs
    {
        public Dictionary<string, string> ReplacemantPairs = new();

        public void AddSharedElement( string key, string fileName)
        {
            string htmlString = File.ReadAllText(Path.Combine(Directory.GetCurrentDirectory(), "Views", "Shared", fileName));
            ReplacemantPairs.Add(key, htmlString);
        }
    }
}
