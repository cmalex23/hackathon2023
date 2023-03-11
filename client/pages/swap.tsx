import {
  Button,
  Card,
  CardContent,
  Container,
  InputBase,
  Stack,
  styled,
  Typography,
  useTheme
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SouthIcon from '@mui/icons-material/South';
import { useState } from 'react';

const DEFAULT_TOKEN = {
  amount: 0,
  symbol: 'eth'
};

type TokenData = {
  amount: number;
  symbol: string;
};

type OnTokenChange = (token: TokenData) => void;

const InputStyled = styled(InputBase)`
  font-size: 2rem;
  flex: 1;
`;

const SwapPage = () => {
  const theme = useTheme();
  const [token1, setToken1] = useState<TokenData | undefined>(DEFAULT_TOKEN);
  const [token2, setToken2] = useState<TokenData | undefined>();

  const onSwitchTokens = () => {
    const oldToken1 = token1;
    setToken1(token2);
    setToken2(oldToken1);
  };

  return (
    <Container maxWidth='sm' sx={{ mt: 5 }}>
      <Card sx={{ maxWidth: 470, margin: '0 auto' }}>
        <CardContent>
          <Typography variant='h5' sx={{ mb: 2 }}>
            Swap
          </Typography>

          <TokenInput
            token={token1}
            onChange={(tokenData) => setToken1(tokenData)}
          />

          <Button
            onClick={onSwitchTokens}
            variant='contained'
            color='inherit'
            sx={{
              position: 'absolute',
              zIndex: 10,
              left: '50%',
              top: '45%',
              transform: 'translate(-50%, -45%)',
              border: `4px solid ${theme.palette.background.paper}`,
              boxShadow: 'unset'
            }}
          >
            <SouthIcon />
          </Button>

          <TokenInput
            token={token2}
            onChange={(tokenData) => setToken2(tokenData)}
            sx={{ mt: 2 }}
          />

          <Button
            variant='contained'
            size='large'
            fullWidth
            sx={{ mt: 2, borderRadius: 90 }}
          >
            Swap
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

const TokenInput = ({
  token,
  onChange,
  sx
}: {
  token?: TokenData;
  onChange: OnTokenChange;
  sx?: object;
}) => {
  const amount = token?.amount ?? 0;

  return (
    <Card
      sx={{
        px: 2,
        py: 1,
        bgcolor: 'background.neutral',
        ...sx
      }}
      variant='outlined'
    >
      <Stack direction='row' alignItems='center'>
        <InputStyled
          type='number'
          id='token1'
          placeholder='0'
          value={amount}
          onChange={(e) =>
            onChange({
              amount: Number(e.target.value),
              symbol: token?.symbol ?? ''
            })
          }
        />

        <SelectTokenButton token={token?.symbol} />
      </Stack>
    </Card>
  );
};

const SelectTokenButton = ({ token }: { token?: string }) => {
  return (
    <Button
      variant='contained'
      color={token ? 'inherit' : 'primary'}
      sx={{ borderRadius: 90, fontSize: '1rem' }}
      endIcon={<KeyboardArrowDownIcon />}
    >
      {token?.toUpperCase() ?? 'Select Token'}
    </Button>
  );
};

export default SwapPage;
