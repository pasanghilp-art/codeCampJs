            function convertMarkdown() {
        let markdown = document.getElementById('markdown-input').value;
        let html = markdown;

        html = html.replace(/^### (.*)$/gm, '<h3>$1</h3>');
        html = html.replace(/^## (.*)$/gm, '<h2>$1</h2>');
        html = html.replace(/^# (.*)$/gm, '<h1>$1</h1>');

        html = html.replace(/\*\*(.*?)\*\*(?!\*)/g, '<strong>$1</strong>');
        html = html.replace(/__(.*?)__/g, '<strong>$1</strong>');

        html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
        html = html.replace(/_(.*?)_/g, '<em>$1</em>');

        html = html.replace(/!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2">');
        html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href ="$2">$1</a>');

        html = html.replace(/^> (.*)$/gm,'<blockquote>$1</blockquote>');

        return html;
      }

      document.getElementById('markdown-input').addEventListener('input',function(){
        let result = convertMarkdown();
      document.getElementById('html-output').textContent = result;
      document.getElementById('preview').innerHTML = result;
});