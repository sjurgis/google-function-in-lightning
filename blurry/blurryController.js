({
	handleFilesChange: function(component, event, helper) {
		const fr = new FileReader()
		fr.onload = () => {
			// convert image to base64
			const fileContents = fr.result
			const base64Mark = 'base64,'
			const dataStart = fileContents.indexOf(base64Mark) + base64Mark.length
			const fileContentsSubs = fileContents.substring(dataStart)
			// render image 
			component.set('v.image', 'data:image/png;base64,' + fileContentsSubs)
			// form a request
			const endpoint = 'https://region-project.cloudfunctions.net/function'
			const body = {
					image: {
						content: fileContentsSubs
					}
				}
			// send request to our API
			fetch(endpoint, {
				method: 'POST',
				body: JSON.stringify(body)
			}).then(m => m.json() ).then(i => { // parse JSON and render image
					component.set('v.image', 'data:image/png;base64,' + i.Result)
			})
		}
		// pass files into FileReader
		fr.readAsDataURL(event.getSource().get('v.files')[0])
	}
})