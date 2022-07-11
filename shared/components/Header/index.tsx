import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import {
	Box,
	Stack,
	Typography,
	Paper,
	MenuItem,
	Select,
	FormControl,
	Hidden,
	ClickAwayListener,
	Grow,
	MenuList,
	Popper,
} from '@mui/material';
import { useStyles } from './styled';
import Link from 'next/link';
import Image from 'next/image';
import { AiFillCaretDown } from 'react-icons/ai';

interface IProps {
	bg?: string;
}

const Header: React.FC<IProps> = ({ bg }) => {
	const { t } = useTranslation();
	const router = useRouter();

	const handleLocaleChange = (event: any) => {
		const value = event.target.value;

		router.push(router.route, router.asPath, {
			locale: value,
		});
	};
	const styles = useStyles();

	const [open, setOpen] = React.useState(false);
	const anchorRef = React.useRef<HTMLButtonElement>(null);

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = (event: Event | React.SyntheticEvent) => {
		if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
			return;
		}

		setOpen(false);
	};

	function handleListKeyDown(event: React.KeyboardEvent) {
		if (event.key === 'Tab') {
			event.preventDefault();
			setOpen(false);
		} else if (event.key === 'Escape') {
			setOpen(false);
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

	return (
		<header>
			<Box position="fixed" width="100%" bgcolor={bg} zIndex={6}>
				<Stack
					direction={['column', 'column', 'column', 'row']}
					justifyContent="space-around"
					sx={styles.container}
					alignItems="center">
					<Box ml={4}>
						<Link href="/">
							<Image width={160} height={60} src="/2022/03/logo_landian_letras_blanco.svg" />
						</Link>
					</Box>
					<Stack
						direction="row"
						spacing={[1, 3]}
						mb={[2, 0]}
						alignItems="center"
						justifyContent="center"
						sx={{ fontSize: '11px' }}>
						<Link href="/">
							<Typography>{t('navbar.options.0')}</Typography>
						</Link>
						<Link href="/LNDA">
							<Typography>{t('navbar.options.1')}</Typography>
						</Link>
						<Link href="/news">
							<Typography>{t('navbar.options.2')}</Typography>
						</Link>
						<Typography
							sx={{ display: 'flex', gap: 1, alignItems: 'center' }}
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
													<a href="/2022/05/landian-whitepaper-es-24-05-2022.pdf" target="_blank" rel="noopener noreferrer">
														<Typography>Whitepaper</Typography>
													</a>
												</MenuItem>
												<MenuItem>
													<a href="/2022/05/landian-litepaper-en-05-2022.pdf" target="_blank" rel="noopener noreferrer">
														<Typography>Litepaper</Typography>
													</a>
												</MenuItem>
											</MenuList>
										</ClickAwayListener>
									</Paper>
								</Grow>
							)}
						</Popper>
						<Link href="/news">
							<Typography>{t('navbar.options.4')}</Typography>
						</Link>
						<Link href="/contact">
							<Typography>{t('navbar.options.5')}</Typography>
						</Link>

						<Hidden smDown>
							<FormControl sx={styles.formcontrol} size="small">
								<Select onChange={handleLocaleChange} value={router.locale}>
									<MenuItem value="en-US">EN</MenuItem>
									<MenuItem value="es-ES">ES</MenuItem>
								</Select>
							</FormControl>
						</Hidden>
					</Stack>
					<Hidden smUp>
						<Stack>
							<FormControl sx={styles.formcontrol} size="small">
								<Select onChange={handleLocaleChange} value={router.locale}>
									<MenuItem value="en-US">EN</MenuItem>
									<MenuItem value="es-ES">ES</MenuItem>
								</Select>
							</FormControl>
						</Stack>
					</Hidden>
					<Stack
						direction={{ xs: 'row', lg: 'column' }}
						alignItems="center"
						justifyContent="center"
						height="100%"
						gap="5px"
						width={{ xs: 'auto', md: '50%', lg: 'auto' }}
						mt={{ xs: 2, lg: 0 }}>
						<Paper sx={styles.paper}>1 Landian Token (LNDA) = $0.34</Paper>
						<Paper sx={styles.blackpaper}>{t('buy.buy')}</Paper>
					</Stack>
				</Stack>
			</Box>
		</header>
	);
};

export default Header;
