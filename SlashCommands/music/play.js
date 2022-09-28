// const player = require('../../client/player.js');

module.exports = {
    name: 'play',
    description: 'Play a song from YouTube, SoundCloud, Spotify, Mixer, Twitch, Bandcamp, or a direct link.',
    aliases: ['p'],
    usage: '<song name>',
    category: '🎵 - Music',
    options: [
        {
            name: 'ناوى گۆرانی یان لینک دابنێ',
            description: 'پێویستە شتێک بنووسی',
            type: 'STRING',
            required: true
        }
    ],
    run: async (client, interaction, args) => {
        const string = interaction.options.getString('لینک یان ناوی گۆرانی')

        const voiceChannel = interaction.member.voice.channel
        const queue = await client.distube.getQueue(interaction)

        // await interaction.reply("🔍 **Searching and attempting...**")
        await interaction.followUp("Đã tìm kiếm thành công...👌")
        client.distube.play(voiceChannel, string, {
            textChannel: interaction.channel,
            member: interaction.member
        })
    }
}
