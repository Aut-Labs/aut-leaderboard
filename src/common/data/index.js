import AutLogo from "common/assets/image/logo.svg";

/* ------------------------------------ */
// Navbar data section
/* ------------------------------------ */

export const NavbarData = {
  logo: AutLogo,
  navButtons: [],
  menuItems: [],
};

/* ------------------------------------ */
// FOOTER data section
/* ------------------------------------ */
import footerDiscord from "common/assets/image/discord-social.svg";
import footerTwitter from "common/assets/image/twitter-social.svg";
import footerDocs from "common/assets/image/docs.svg";
import footerMirror from "common/assets/image/mirror-logo.svg";

export const FooterData = {
  menu: [],
  logo: AutLogo,
  mailchimpUrl:
    "https://aut.us20.list-manage.com/subscribe/post?u=d961a0504e2d77cc544c89c33&amp;id=0599e9c37b&amp;f_id=008810e7f0",
  copyright: `© Āut Labs ${new Date().getFullYear()}`,
  widgets: [
    {
      id: 2,
      title: "Quick Links",
      list: [
        {
          id: 3,
          title: "Github",
          target: "_blank",
          link: "https://github.com/Aut-Labs",
        },
        {
          id: 2,
          title: "Docs",
          target: "_blank",
          link: "https://docs.aut.id",
        },
      ],
    },
  ],
  social: [
    {
      link: "https://twitter.com/opt_aut",
      icon: footerTwitter,
      name: "Twitter",
    },
    {
      link: "https://aut.mirror.xyz",
      icon: footerMirror,
      name: "Mirror",
    },
    {
      link: "http://discord.gg/aXJFGgcvUk",
      icon: footerDiscord,
      name: "Discord",
    },
  ],
};

/* ------------------------------------ */
// aut-leaderboard data section
/* ------------------------------------ */
import expand from "common/assets/image/expand.svg";
import invite from "common/assets/image/invite.svg";
import fingerprint from "common/assets/image/fingerprint.svg";
import Button from "common/components/Button";

export const NovaLeaderboardData = {
  title: "Nova Leaderboard",
  subtitle: "Here are the top Novas by number of members",

  items: [
    {
      name: "Best community",
      description:
        "Time to customize your Community. Add some details, its name, its logo, its story.\nTell your community members why it exists, and why it matters.",
      image:
        "ipfs://bafkreiddqyd46fvb5ffpbi3lgv7lea2s3mtpyjoh2ti4mj7r56nu4zydwe",

      properties: {
        market: "Local Projects & DAOs",
        commitment: 5,
        members: 19,
        rolesSets: [
          {
            roleSetName: "First",
            roles: [
              {
                id: 1,
                roleName: "Role 1",
              },
              {
                id: 2,
                roleName: "Role 2",
              },
              {
                id: 3,
                roleName: "Role 3",
              },
            ],
          },
        ],
        address: "0x90857F07ac8d17fc7D252c29BD8ac2ce05E2c73C",
        userData: {
          role: "1",
          commitment: "6",
          isActive: true,
          roleName: "Role 1",
          commitmentDescription: "Trusted seed 🌱",
        },
      },
    },

    {
      name: "Best community 2",
      description:
        "Time to customize your Community. Add some details, its name, its logo, its story.\nTell your community members why it exists, and why it matters.",
      image:
        "ipfs://bafkreiddqyd46fvb5ffpbi3lgv7lea2s3mtpyjoh2ti4mj7r56nu4zydwe",

      properties: {
        market: "Local Projects & DAOs",
        commitment: 5,
        members: 19,
        rolesSets: [
          {
            roleSetName: "First",
            roles: [
              {
                id: 1,
                roleName: "Role 1",
              },
              {
                id: 2,
                roleName: "Role 2",
              },
              {
                id: 3,
                roleName: "Role 3",
              },
            ],
          },
        ],
        address: "0x90857F07ac8d17fc7D252c29BD8ac2ce05E2c73C",
        userData: {
          role: "1",
          commitment: "6",
          isActive: true,
          roleName: "Role 1",
          commitmentDescription: "Trusted seed 🌱",
        },
      },
    },
    {
      name: "A sample community",
      description:
        "A community about testing quests, tasks and lots of other things",
      image:
        "ipfs://bafkreihrhccb2qvrnb2zcgyjnl4z6asv7qtgzshzuj6hk7tpm4lywxb7fi",
      properties: {
        market: "Art, Events & NFTs",
        members: 10,

        commitment: 5,
        rolesSets: [
          {
            roleSetName: "First",
            roles: [
              {
                id: 1,
                roleName: "Role 1",
              },
              {
                id: 2,
                roleName: "Role 2",
              },
              {
                id: 3,
                roleName: "Role 3",
              },
            ],
          },
        ],
        address: "0x5aB500e556477623Fd16bc368B2CF6FdD99Ba489",
        userData: {
          role: "1",
          commitment: "8",
          isActive: true,
          roleName: "Role 1",
          commitmentDescription: "Soulbound ⛓️",
        },
      },
    },
    {
      name: "Some other community",
      description:
        "Time to customize your Community. Add some details, its name, its logo, its story.\nTell your community members why it exists, and why it matters.",
      image:
        "ipfs://bafkreihrhccb2qvrnb2zcgyjnl4z6asv7qtgzshzuj6hk7tpm4lywxb7fi",
      properties: {
        market: "Art, Events & NFTs",
        commitment: 9,
        members: 12,

        rolesSets: [
          {
            roleSetName: "First",
            roles: [
              {
                id: 1,
                roleName: "Testing 1",
              },
              {
                id: 2,
                roleName: "Testing 2",
              },
              {
                id: 3,
                roleName: "Testing 3",
              },
            ],
          },
        ],
        address: "0xa0c81af858AE0B59c0e58485f4C71288E4C7da07",
        userData: {
          role: "1",
          commitment: "10",
          isActive: true,
          roleName: "Testing 1",
          commitmentDescription: "Soulbound ⛓️",
        },
      },
    },
    {
      name: "And another one",
      description: "Testing",
      image:
        "ipfs://bafkreiddqyd46fvb5ffpbi3lgv7lea2s3mtpyjoh2ti4mj7r56nu4zydwe",
      properties: {
        market: "Art, Events & NFTs",
        commitment: 5,
        members: 10,

        rolesSets: [
          {
            roleSetName: "First",
            roles: [
              {
                id: 1,
                roleName: "Role1",
              },
              {
                id: 2,
                roleName: "Role2",
              },
              {
                id: 3,
                roleName: "Role3",
              },
            ],
          },
        ],
        address: "0xd2C047142333467B101Af5B062f12AaFC6885c89",
        userData: {
          role: "1",
          commitment: "6",
          isActive: true,
          roleName: "Role1",
          commitmentDescription: "Trusted seed 🌱",
        },
      },
    },
    {
      name: "Another another",
      description: "dfhghg\n",

      image:
        "ipfs://bafkreiddqyd46fvb5ffpbi3lgv7lea2s3mtpyjoh2ti4mj7r56nu4zydwe",
      properties: {
        market: "Art, Events & NFTs",
        commitment: 6,
        members: 10,

        rolesSets: [
          {
            roleSetName: "First",
            roles: [
              {
                id: 1,
                roleName: "Role1",
              },
              {
                id: 2,
                roleName: "Role2",
              },
              {
                id: 3,
                roleName: "Role3",
              },
            ],
          },
        ],
        address: "0x9f0C0a43581884f40441BA0261b94A3E3B8ba0a0",
        userData: {
          role: "1",
          commitment: "8",
          isActive: true,
          roleName: "Role1",
          commitmentDescription: "Soulbound ⛓️",
        },
      },
    },
    {
      name: "TestBla",
      description: "gdfghf",
      image:
        "ipfs://bafkreiddqyd46fvb5ffpbi3lgv7lea2s3mtpyjoh2ti4mj7r56nu4zydwe",
      properties: {
        market: "Art, Events & NFTs",
        commitment: 6,
        members: 10,

        rolesSets: [
          {
            roleSetName: "First",
            roles: [
              {
                id: 1,
                roleName: "Role 1",
              },
              {
                id: 2,
                roleName: "Role 2",
              },
              {
                id: 3,
                roleName: "Role3",
              },
            ],
          },
        ],
        address: "0x64F7Ec2901E2B707303A1F723e66F708EFbC99E8",
        userData: {
          role: "1",
          commitment: "7",
          isActive: true,
          roleName: "Role 1",
          commitmentDescription: "Trusted seed 🌱",
        },
      },
    },
  ],
};
