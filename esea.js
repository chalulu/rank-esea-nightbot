var antoligy = antoligy || {};
antoligy.cloudflareChallenge = {
	webpage:	false,
	system:		false,
	page:		false,
	url:		false,
	userAgent:	false,
	init: function(url) {
		this.webpage	= require('webpage');
		this.system		= require('system');
		this.page		= this.webpage.create();
		this.url		= url;
		this.userAgent	= 'Mozilla/5.0 (Windows NT 6.3; rv:36.0) Gecko/20100101 Firefox/36.0';
		this.timeout	= 6000;
	},
	solve: function(onSolved) {
		var self = this;
		this.page.settings.userAgent = this.userAgent;
		this.page.open(this.url, function(status) {
			setTimeout(function() {
				onSolved(self.page, phantom);
				phantom.exit()
			}, self.timeout);
		});
	}
}

function onSolved(page, data) {
    console.log(page.content);
}

antoligy.cloudflareChallenge.init("https://play.esea.net/users/" + require('system').args[1]);
antoligy.cloudflareChallenge.solve(onSolved);
