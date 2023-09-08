import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import {
	Box,
	Stack,
	Typography,
	Paper,
	MenuItem,
	ClickAwayListener,
	Grow,
	MenuList,
	Popper,
	Hidden,
	IconButton,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import { useStyles } from './styled';
import Link from 'next/link';
import Image from 'next/image';
import { AiFillCaretDown, AiOutlineMenu } from 'react-icons/ai';
import SpainFlag from '../SpainFlag';
import UsaFlag from '../UsaFlag';

interface IProps {
	bg?: string;
}

const Header: React.FC<IProps> = ({ bg }) => {
	const { t } = useTranslation();
	const router = useRouter();

	const handleClickLocale = (value: string) => {
		router.push(router.route, router.asPath, {
			locale: value,
		});
	};
	const styles = useStyles();

	const [open, setOpen] = React.useState(false);
	const anchorRef = React.useRef<HTMLButtonElement>(null);
	const [open1, setOpen1] = React.useState(false);
	const anchorRef1 = React.useRef<HTMLButtonElement>(null);

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleToggle1 = () => {
		setOpen1((prevOpen) => !prevOpen);
	};

	const handleClose = (event: Event | React.SyntheticEvent) => {
		if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
			return;
		}

		setOpen(false);
	};
	const handleClose1 = (event: Event | React.SyntheticEvent) => {
		if (anchorRef1.current && anchorRef1.current.contains(event.target as HTMLElement)) {
			return;
		}

		setOpen1(false);
	};

	function handleListKeyDown(event: React.KeyboardEvent) {
		if (event.key === 'Tab') {
			event.preventDefault();
			setOpen(false);
		} else if (event.key === 'Escape') {
			setOpen(false);
		}
	}

	function handleListKeyDown1(event: React.KeyboardEvent) {
		if (event.key === 'Tab') {
			event.preventDefault();
			setOpen1(false);
		} else if (event.key === 'Escape') {
			setOpen1(false);
		}
	}

	// return focus to the button when we transitioned from !open -> open
	const prevOpen = React.useRef(open);
	React.useEffect(() => {
		if (prevOpen.current === true && open === false) {
			anchorRef.current!.focus();
		}

		prevOpen.current = open;
	}, [open]);
	//
	const prevOpen1 = React.useRef(open1);
	React.useEffect(() => {
		if (prevOpen1.current === true && open1 === false) {
			anchorRef1.current!.focus();
		}

		prevOpen1.current = open1;
	}, [open1]);
	const ButtonLocale = () => (
		<>
			{router.locale === 'en-US' ? (
				<Stack direction="row" spacing={1} alignItems="center" onClick={() => handleClickLocale('es-ES')}>
					<SpainFlag />
					<Typography
						fontSize="12.6px"
						sx={{
							transition: 'all ease 0.5s',
							'&:hover': {
								transform: 'scale(1.2)',
							},
						}}>
						ES
					</Typography>
				</Stack>
			) : (
				<Stack direction="row" spacing={1} alignItems="center" onClick={() => handleClickLocale('en-US')}>
					<UsaFlag />
					<Typography
						fontSize="12.6px"
						sx={{
							transition: 'all ease 0.5s',
							'&:hover': {
								transform: 'scale(1.2)',
							},
						}}>
						EN
					</Typography>
				</Stack>
			)}
		</>
	);
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down('md'));
	const [showMenu, setShowMenu] = useState(true);
	useEffect(() => {
		if (matches) setShowMenu(true);
	}, [matches]);
	return (
		<header>
			<Box position="fixed" width="100%" bgcolor={bg} zIndex={6}>
				<Stack
					direction={['column', 'column', 'column', 'row']}
					justifyContent="center"
					sx={styles.container}
					alignItems="center">
					<Box
						sx={{
							ml: { xs: 'calc(100% - 120%)' },
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							width: { xs: '100%', lg: 'auto' },
						}}>
						<Link href="/">
							<Image width={100} height={100} src="/2022/06/logo.png" />
						</Link>
						<Hidden mdUp>
							<IconButton sx={{ mr: 2 }} onClick={() => setShowMenu(!showMenu)}>
								<AiOutlineMenu />
							</IconButton>
						</Hidden>
					</Box>
					<Stack
						display={showMenu ? 'flex' : 'none'}
						direction="row"
						spacing={[1, 3]}
						mb={[1, 0]}
						mt={[2, 0]}
						alignItems="center"
						justifyContent="center"
						sx={{ fontSize: '12.6px !important', marginLeft: "100px" }}>
						
						<Link href="/">
							<Typography
								fontSize="12.6px"
								sx={{
									transition: 'all ease 0.5s',
									'&:hover': {
										transform: 'scale(1.2)',
									},
								}}>
								Quienes Somos
							</Typography>
						</Link>
						<Link href="/">
							<Typography
								fontSize="12.6px"
								sx={{
									transition: 'all ease 0.5s',
									'&:hover': {
										transform: 'scale(1.2)',
									},
								}}>
								Misión
							</Typography>
						</Link>
						<Link href="/">
							<Typography
								fontSize="12.6px"
								sx={{
									transition: 'all ease 0.5s',
									'&:hover': {
										transform: 'scale(1.2)',
									},
								}}>
								Visión
							</Typography>
						</Link>
						<Link href="/">
							<Typography
								fontSize="12.6px"
								sx={{
									transition: 'all ease 0.5s',
									'&:hover': {
										transform: 'scale(1.2)',
									},
								}}>
								Politicas
							</Typography>
						</Link>
						<Link href="/">
							<Typography
								fontSize="12.6px"
								sx={{
									transition: 'all ease 0.5s',
									'&:hover': {
										transform: 'scale(1.2)',
									},
								}}>
								Organigrama
							</Typography>
						</Link>
						<Link href="/">
							<Typography
								fontSize="12.6px"
								sx={{
									transition: 'all ease 0.5s',
									'&:hover': {
										transform: 'scale(1.2)',
									},
								}}>
								Objetivos
							</Typography>
						</Link>
						<Link href="/">
							<Typography
								fontSize="12.6px"
								sx={{
									transition: 'all ease 0.5s',
									'&:hover': {
										transform: 'scale(1.2)',
									},
								}}>
								Estrategias
							</Typography>
						</Link>
					</Stack>

				</Stack>
			</Box>
		</header>
	);
};

export default Header;
