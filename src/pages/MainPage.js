import React from 'react'
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function MainPage() {

  return (
    <Container maxWidth="xl" >
      <Grid container spacing={3}>
        <Grid item xs={6} md={4}>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                image="/Img/material.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                구입재료 입고 처리
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  조건에 맞는 구입 재료를 조회 하거나, 등록 입고 처리를 합니다.
                  구입 재료의 입고일자, 품번, 품명, 중량, 구매담당자, 구매처명, 두께, 폭, 길이를 수정 할 수 있습니다.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href="/shipment">바로 가기</Button>
            </CardActions>
        </Card>
        </Grid>

        <Grid item xs={6} md={4}>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                image="/Img/instruction.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                지시진행 및 현황 조회
                </Typography>
                <Typography variant="body2" color="text.secondary">
                입고 된 재료 정보를 조회하여, 작업지시 정보를 등록 및 수정합니다.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href="instruction">바로 가기</Button>
            </CardActions>
        </Card>
        </Grid>

        <Grid item xs={6} md={4}>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                image="/Img/instruction_history.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                작업지시이력 조회
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  등록 된 작업지시 이력정보를 조회 할 수 있습니다.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href="/instruction/history">바로 가기</Button>
            </CardActions>
        </Card>
        </Grid>

        <Grid item xs={6} md={4}>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                image="/Img/work.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                조업실적 작업처리 등록
                </Typography>
                <Typography variant="body2" color="text.secondary">
                작업지시 기록 정보가 등록 된 재료에 대해 조회 할 수 있습니다.
                품질 기준 정보를 조회 하여 조업 작업 실적 정보를 등록 및 수정 할 수 있습니다.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href="/work">바로 가기</Button>
            </CardActions>
        </Card>
        </Grid>

        <Grid item xs={6} md={4}>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                image="/Img/work_history.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                조업 실적 작업 이력
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  작업지시 및 실적 이력 정보를 조회 할 수 있습니다.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href="work/history">바로 가기</Button>
            </CardActions>
        </Card>
        </Grid>

        <Grid item xs={6} md={4}>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                image="/Img/quality.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                품질 기준 등록
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  품질 기준 정보를 조회, 등록 및 수정 할 수 있습니다.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href="/quality">바로 가기</Button>
            </CardActions>
        </Card>
        </Grid>

      </Grid>
    </Container>
  )
}
