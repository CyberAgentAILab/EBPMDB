import Header from '../components/header'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import cyberagentLogoSrc from '../public/images/cyberagent_logo.png'
import ufjLogoSrc from '../public/images/ufj_logo.png'
import {Container, Typography, Card, CardContent, CardActions, Avatar, Grid, IconButton, Box, Link} from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import GithubIcon from '@mui/icons-material/GitHub'
import LanguageIcon from '@mui/icons-material/Language'
import ExportImage from 'next-image-export-optimizer'
import { FunctionComponent } from 'react'

const committee: FunctionComponent = () => {
  const github = Symbol()
  const twitter = Symbol()
  const facebook = Symbol()
  const pageUrl = Symbol()
  type ServiceSymbols = typeof github | typeof twitter | typeof facebook | typeof pageUrl
  
  interface AccountService {
    serviceName: ServiceSymbols
    serviceUrl: string
  }

  interface Member {
    name: string
    organization: string
    avatarUrl: string
    accounts: AccountService[]
  }

  const committeeMembers: Member[] = [
    {
      name: '池田貴昭',
      organization: '三菱UFJリサーチ&コンサルティング',
      avatarUrl: '',
      accounts: [],
    },
    {
      name: '伊藤寛武',
      organization: '株式会社サイバーエージェント',
      avatarUrl: 'https://avatars.githubusercontent.com/u/20162070?v=4',
      accounts: [
        {
          serviceName: github,
          serviceUrl: 'https://github.com/HirotakeIto',
        },
      ]
    },
    {
      name: '井上領介',
      organization: '三菱UFJリサーチ&コンサルティング',
      avatarUrl: '',
      accounts: [],
    },
    {
      name: '小林庸平',
      organization: '三菱UFJリサーチ&コンサルティング',
      avatarUrl: '',
      accounts: [],
    },
    {
      name: '竹浪良寛',
      organization: '株式会社サイバーエージェント',
      avatarUrl: 'https://avatars.githubusercontent.com/u/83002005?v=4',
      accounts: [
        {
          serviceName: github,
          serviceUrl: 'https://github.com/ryaukwan',
        },
      ],
    },
    {
      name: '森脇大輔',
      organization: '株式会社サイバーエージェント',
      avatarUrl: 'https://avatars.githubusercontent.com/u/29854085?v=4',
      accounts: [
        {
          serviceName: github,
          serviceUrl: 'https://github.com/daimoriwaki',
        },
        {
        serviceName: pageUrl,
        serviceUrl: 'https://sites.google.com/site/dmoriwaki/',
      }
      ],
    },
  ];

  const advisers: Member[] = [
    {
      name: '伊芸研吾',
      organization: '慶應義塾大学',
      avatarUrl: '',
      accounts: [
        {
          serviceName: pageUrl,
          serviceUrl: 'https://sites.google.com/view/kengoigei/home',
        }
    ],
    },
    {
      name: '杉谷和哉',
      organization: '岩手県立大学',
      avatarUrl: '',
      accounts: [],
    },
    {
      name: '髙橋雅生',
      organization: '一橋大学',
      avatarUrl: '',
      accounts: [],
    },
    {
      name: '中室牧子',
      organization: '慶應義塾大学',
      avatarUrl: '',
      accounts: [],
    },
    {
      name: '茂木良平',
      organization: '南デンマーク大学',
      avatarUrl: '',
      accounts: [],
    },
    {
      name: '山口慎太郎',
      organization: '東京大学',
      avatarUrl: '',
      accounts: [],
    },
  ]

  const AccountIconButton: FunctionComponent<AccountService> = props => {
    const { serviceName, serviceUrl } = props
    const accountConf = (serviceName: ServiceSymbols) => {
      switch (serviceName) {
        case github:
          return {
            color: '#000000',
            icon: <GithubIcon />,
          }
        case twitter:
          return {
            color: '#1DA1F2',
            icon: <TwitterIcon />,
          }
        case facebook:
          return {
            color: '#1877F2',
            icon: <FacebookIcon />,
          }
        case pageUrl:
          return {
            color: '#21759B',
            icon: <LanguageIcon />,
          }
        default:
          return {
            color: '#21759B',
            icon: <LanguageIcon />,
          }
      }
    }
    return (
      <IconButton
        sx={{ color: accountConf(serviceName).color }}
        href={serviceUrl} target="_blank">
        {accountConf(serviceName).icon}
      </IconButton>
    )
  }

  return (
    <>
      <Header title="運営主体について" description="" />
      <Navigation />
      <Container sx={{ m: 'auto', width: '100%', maxWidth: 1024 }}>
        <Typography component='h1' variant='h4' sx={{ marginTop: '2em' }}>
          運営主体について
        </Typography>
        <Typography component="p" variant="body1" sx={{ my: '1.5em' }}>
          EBPMデータベースの運営は有志によって行われています。
        </Typography>
        <Typography component='h2' variant='h5' sx = {{ marginTop: '2.5em' }}>
          運営主体チーム
        </Typography>
        <Typography component="p" variant="body1" sx={{ my: '1.5em' }}>
          運営チームはEBPMデータベースを通じたEBPMの普及・発展に尽力します。
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 8, sm: 8, md: 12 }}>
          {committeeMembers.map((member: Member, index) => (
            <Grid item xs={8} sm={8} md={4} key={index}>
              <Card>
                <CardContent sx={{ pb: 0 }}>
                  <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                    <Grid item columns={{ xs: 2, sm: 2, md: 2 }} sx={{ mt: '0.5em' }}>
                      {
                        member.avatarUrl === ''
                          ? <Avatar><PersonIcon /></Avatar>
                          : <Avatar alt={member.name} src={member.avatarUrl} />
                      }
                    </Grid>
                    <Grid item columns={{ xs: 8, sm: 8, md: 8 }}>
                    <Typography gutterBottom variant="caption" component="div">
                      {member.organization}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      {member.name}
                    </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
                <CardActions disableSpacing={true} sx={{ pt: 0, pl: '1em', justifyContent: 'flex-end' }}>
                  <Box sx={{ minHeight: 40 }}>
                    {member.accounts.map((account, index) => (
                      <AccountIconButton
                        key={index}
                        serviceName={account.serviceName}
                        serviceUrl={account.serviceUrl}
                      />
                    ))}
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Typography component='h2' variant='h5' sx = {{ marginTop: '2.5em' }}>
          アドバイザー
        </Typography>
        <Typography component="p" variant="body1" sx={{ my: '1.5em' }}>
          アドバイザーはEBPMデータベースに関する技術的助言を行います。
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 8, sm: 8, md: 12 }}>
          {advisers.map((member: Member, index) => (
            <Grid item xs={8} sm={8} md={4} key={index}>
              <Card>
                <CardContent sx={{ pb: 0 }}>
                  <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                    <Grid item columns={{ xs: 2, sm: 2, md: 2 }} sx={{ mt: '0.5em' }}>
                      {
                        member.avatarUrl === ''
                          ? <Avatar><PersonIcon /></Avatar>
                          : <Avatar alt={member.name} src={member.avatarUrl} />
                      }
                    </Grid>
                    <Grid item columns={{ xs: 8, sm: 8, md: 8 }}>
                    <Typography gutterBottom variant="caption" component="div">
                      {member.organization}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      {member.name}
                    </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
                <CardActions disableSpacing={true} sx={{ pt: 0, pl: '1em', justifyContent: 'flex-end' }}>
                  <Box sx={{ minHeight: 40 }}>
                    {member.accounts.map((account, index) => (
                      <AccountIconButton
                        key={index}
                        serviceName={account.serviceName}
                        serviceUrl={account.serviceUrl}
                      />
                    ))}
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Typography component='h2' variant='h5' sx = {{ marginTop: '2em' }}>
          協働機関
        </Typography>
        <Typography component="p" variant="body1" sx={{ my: '1.5em' }}>
          協働機関は所属社員のEBPMデータベースに関する活動を支援しています。
        </Typography>
        <Grid container spacing={{ xs: 1, md: 4 }} columns={{ xs: 8, sm: 8, md: 8 }}>
          <Grid item xs={8} sm={4} md={4}>
            <IconButton
              href="https://www.cyberagent.co.jp/"
              target="_blank"
              sx={{ borderRadius: "4px", border: "1px solid #cfd8dc", px: 8, }}
            >
              <ExportImage
                src={cyberagentLogoSrc}
                useWebp={false}
                placeholder="empty"
                unoptimized={true}
                style={{ width: '100%', height: "auto" }}
                alt="株式会社サイバーエージェント" />
            </IconButton>
          </Grid>
          <Grid item xs={8} sm={4} md={4}>
            <IconButton
              href="https://www.murc.jp/"
              target="_blank"
              sx={{ borderRadius: "4px", border: "1px solid #cfd8dc", px: 8, }}
            >
              <ExportImage
                src={ufjLogoSrc}
                useWebp={false}
                placeholder="empty"
                unoptimized={true}
                style={{ width: '100%', height: "auto" }}
                alt="三菱UFJリサーチ&コンサルティング" />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  )
}

export default committee