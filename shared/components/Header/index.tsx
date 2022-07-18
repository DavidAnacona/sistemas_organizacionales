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
					justifyContent="space-between"
					sx={styles.container}
					alignItems="center">
					<Box
						sx={{
							ml: { xs: 'calc(100% - 95%)' },
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							width: { xs: '100%', lg: 'auto' },
						}}>
						<Link href="/">
							<Image width={150} height={17} src="/2022/03/logo_landian_letras_blanco.svg" />
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
						sx={{ fontSize: '12.6px !important' }}>
						<Link href="/">
							<Typography
								fontSize="12.6px"
								sx={{
									transition: 'all ease 0.5s',
									'&:hover': {
										transform: 'scale(1.2)',
									},
								}}>
								{t('navbar.options.0')}
							</Typography>
						</Link>
						<Link href="/LNDA">
							<Typography
								fontSize="12.6px"
								sx={{
									transition: 'all ease 0.5s',
									'&:hover': {
										transform: 'scale(1.2)',
									},
								}}>
								{t('navbar.options.1')}
							</Typography>
						</Link>

						<Typography
							fontSize="12.6px"
							sx={{
								display: 'flex',
								gap: 1,
								alignItems: 'center',
								transition: 'all ease 0.5s',
								'&:hover': {
									transform: 'scale(1.2)',
								},
							}}
							ref={anchorRef1}
							id="composition-button"
							aria-controls={open1 ? 'composition-menu' : undefined}
							aria-expanded={open1 ? 'true' : undefined}
							aria-haspopup="true"
							onClick={handleToggle1}>
							Blog <AiFillCaretDown size={10} />
						</Typography>

						<Popper open={open1} anchorEl={anchorRef1.current} role={undefined} placement="bottom-start" transition disablePortal>
							{({ TransitionProps, placement }) => (
								<Grow
									{...TransitionProps}
									style={{
										transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom',
									}}>
									<Paper sx={{ background: 'white', color: 'black' }}>
										<ClickAwayListener onClickAway={handleClose1}>
											<MenuList
												autoFocusItem={open1}
												id="composition-menu"
												aria-labelledby="composition-button"
												onKeyDown={handleListKeyDown1}>
												<MenuItem>
													<Link href="/news">
														<Typography>{t('navbar.options.2')}</Typography>
													</Link>
												</MenuItem>
												<MenuItem>
													<Link href="/blog">
														<Typography>Blog</Typography>
													</Link>
												</MenuItem>
											</MenuList>
										</ClickAwayListener>
									</Paper>
								</Grow>
							)}
						</Popper>
						<Typography
							fontSize="12.6px"
							sx={{
								display: 'flex',
								gap: 1,
								alignItems: 'center',
								transition: 'all ease 0.5s',
								'&:hover': {
									transform: 'scale(1.2)',
								},
							}}
							ref={anchorRef}
							id="composition-button"
							aria-controls={open ? 'composition-menu' : undefined}
							aria-expanded={open ? 'true' : undefined}
							aria-haspopup="true"
							onClick={handleToggle}>
							{t('navbar.options.3')} <AiFillCaretDown size={10} />
						</Typography>
						<Popper open={open} anchorEl={anchorRef.current} role={undefined} placement="bottom-start" transition disablePortal>
							{({ TransitionProps, placement }) => (
								<Grow
									{...TransitionProps}
									style={{
										transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom',
									}}>
									<Paper sx={{ background: 'white', color: 'black' }}>
										<ClickAwayListener onClickAway={handleClose}>
											<MenuList
												autoFocusItem={open}
												id="composition-menu"
												aria-labelledby="composition-button"
												onKeyDown={handleListKeyDown}>
												<MenuItem>
													<a
														href={`/2022/03/${
															router.locale === 'en-US' ? 'whitepaper-EN_8-07-2022.pdf' : 'whitepaper-ES_8-07-2022.pdf'
														}`}
														target="_blank"
														rel="noopener noreferrer">
														<Typography>Whitepaper</Typography>
													</a>
												</MenuItem>
												<MenuItem>
													<a
														href={`/2022/03/${
															router.locale === 'en-US' ? 'litepaper-EN_8-07-2022.pdf' : 'litepaper-ES_8-07-2022.pdf'
														}`}
														target="_blank"
														rel="noopener noreferrer">
														<Typography>Litepaper</Typography>
													</a>
												</MenuItem>
											</MenuList>
										</ClickAwayListener>
									</Paper>
								</Grow>
							)}
						</Popper>
						<Link href="/#">
							<Typography>{t('navbar.options.4')}</Typography>
						</Link>
						<Link href="/contact">
							<Typography
								fontSize="12.6px"
								sx={{
									transition: 'all ease 0.5s',
									'&:hover': {
										transform: 'scale(1.2)',
									},
								}}>
								{t('navbar.options.5')}
							</Typography>
						</Link>
						<Hidden lgDown>
							<ButtonLocale />
						</Hidden>
					</Stack>
					<Hidden lgUp>
						<Stack mt={1} display={showMenu ? 'flex' : 'none'}>
							<ButtonLocale />
						</Stack>
					</Hidden>
					<Stack
						display={showMenu ? 'flex' : 'none'}
						direction="column"
						alignItems="center"
						justifyContent="center"
						height="100%"
						gap="5px"
						width={{ xs: 'auto', md: '50%', lg: 'auto' }}
						mt={{ xs: 2, lg: 0 }}>
						<Paper sx={styles.paper}>1 Landian Token (LNDA) = $0.41</Paper>
						<a href="https://swap.landian.io/#/home" target="_blank" style={{ width: '100%' }}>
							<Paper sx={styles.blackpaper}>{t('buy.buy')}</Paper>
						</a>
					</Stack>
				</Stack>
			</Box>
		</header>
	);
};

export default Header;
