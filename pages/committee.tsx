import Navigation from '../components/navigation'
import { Container } from '@mui/material'
import { Typography} from '@mui/material'
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FunctionComponent } from 'react'

const committee: FunctionComponent = () => {
    return (
        <>
        <Navigation />
        <Container sx={{m: 'auto'}}>
<Typography component='h2' variant = 'h4' sx = {{my: 2}}>
    運営主体について
</Typography>
<Typography component="p" variant="body1" sx={{my:8, fontSize: 18}}>
    EBPMデータベースの運営は有志によって行われています。
</Typography>
<Typography component='h2' variant = 'h4' sx = {{my: 2}}>
    運営主体チーム
</Typography>
<Typography component="p" variant="body1" sx={{my:8, fontSize: 18}}>
    運営チームはEBPMデータベースを通じたEBPMの普及・発展に尽力します。
</Typography>
<TableContainer component={Paper}>
    <Table sx={{minWidth:300}} aria-label="simple table">
        <TableRow>
            <TableCell>池田貴昭</TableCell>
            <TableCell>三菱UFJリサーチ&コンサルティング</TableCell>
        </TableRow>
        <TableRow>
            <TableCell>伊藤寛武</TableCell>
            <TableCell>株式会社サイバーエージェント</TableCell>
        </TableRow>
        <TableRow>
            <TableCell>井上領介</TableCell>
            <TableCell>三菱UFJリサーチ&コンサルティング</TableCell>
        </TableRow>
        <TableRow>
            <TableCell>小林庸平</TableCell>
            <TableCell>三菱UFJリサーチ&コンサルティング</TableCell>
        </TableRow>
        <TableRow>
            <TableCell>竹浪良寛</TableCell>
            <TableCell>株式会社サイバーエージェント</TableCell>
        </TableRow>
        <TableRow>
            <TableCell>森脇大輔</TableCell>
            <TableCell>株式会社サイバーエージェント</TableCell>
        </TableRow>
    </Table>
</TableContainer>

<Typography component='h2' variant = 'h4' sx = {{my: 2}}>
    アドバイザー
</Typography>
<Typography component="p" variant="body1" sx={{my:8, fontSize: 18}}>
    アドバイザーはEBPMデータベースに関する技術的助言を行います。
</Typography>
<TableContainer component={Paper}>
    <Table sx={{minWidth:300}} aria-label="simple table">
    <TableRow>
            <TableCell>杉谷和哉</TableCell>
            <TableCell>岩手県立大学</TableCell>
        </TableRow>
    <TableRow>
            <TableCell>髙橋雅生</TableCell>
            <TableCell>一橋大学</TableCell>
        </TableRow>
        <TableRow>
            <TableCell>中室牧子</TableCell>
            <TableCell>慶應義塾大学</TableCell>
        </TableRow>
        <TableRow>
            <TableCell>茂木良平</TableCell>
            <TableCell>南デンマーク大学</TableCell>
        </TableRow>
        <TableRow>
            <TableCell>山口慎太郎</TableCell>
            <TableCell>東京大学</TableCell>
        </TableRow>
    </Table>
</TableContainer>

<Typography component='h2' variant = 'h4' sx = {{my: 2}}>
    協働機関
</Typography>
<Typography component="p" variant="body1" sx={{my:8, fontSize: 18}}>
    協働機関は所属社員のEBPMデータベースに関する活動を支援しています。
</Typography>



        </Container>
        
        
        </>
    )
}

export default committee