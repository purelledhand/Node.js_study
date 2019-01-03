const https = require('https');

let CrawlData = [];
const url = 'https://nodejs.org/dist/latest-v5.x/docs/api/';

https.get(url+'index.json', (res)=>{
    let body = '';
    res.on('data', (d)=>{
    	body += d;
    });
    res.on('end', ()=>{
        let index_data = JSON.parse(body).desc;
	
        for(let i=0;i<index_data.length;i++) {
	    if(index_data[i].type == 'text') {
	    	let str = index_data[i].text;
		str = str.substr(str.indexOf("[")+1);
		let temp_idx = str.indexOf("]");
		let title = str.substr(0, temp_idx);

		str = str.substr(temp_idx+1);
		let link = str.slice(1, -1).replace('.html','.json');

		CrawlData.push({
		    'title': title,
		    'link': link,
		    'methods': []
		});
	    }
  	}
	//console.log(CrawlData);
	setTimeout(()=>{
	    GetMethod();
	}, 1000);
    });
}).on('error', (e)=>{
    console.log("[*] ERROR : ", e);
});

let page_idx = 0;
const GetMethod = ()=>{
    console.log("Get methods");

    https.get(url + CrawlData[page_idx].link, (res)=>{
	let body = '';
	res.on('data', (d)=>{
	    body += d;
	});

	res.on('end', ()=>{
	    const temp = JSON.parse(body);
	    if(!temp || !temp.modules || temp.modules.length == 0 || !temp.modules[0].methods) {
		page_idx++;
		setTimeout(()=>{
		    GetMethod();
		}, 1000);
		return;
	    }
  
	    let index_data = temp.modules[0].methods;
	    for(let i=0;i<index_data.length;i++){
		CrawlData[page_idx].methods.push({
		    textRaw: index_data[i].textRaw,
		    desc: index_data[i].desc,
		});
	    }
	
	    if(page_idx < CrawlData.length-1){
		page_idx++;
		setTimeout(()=>{
		    GetMethod();
		}, 200);
	    } else
		console.log(CrawlData);
		
	});
    }).on('error', (e)=>{
	console.log('[*] ERROR : ', e);
    });
};
