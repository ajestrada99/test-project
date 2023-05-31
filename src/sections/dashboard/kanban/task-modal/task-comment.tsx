import type { FC } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { Avatar, Paper, Stack, Typography } from '@mui/material';
import { useSelector } from '../../../../store';
import type { Comment, Member } from '../../../../types/kanban';



interface TaskCommentProps {
  comment: Comment;
}

export const TaskComment: FC<TaskCommentProps> = (props) => {
  const { comment, ...other } = props;

  const createdAt = format(comment.createdAt, 'MMM dd, yyyy \'at\' hh:mm a');

  return (
    <Stack
      alignItems="flex-start"
      direction="row"
      spacing={2}
      {...other}
    >
      <Stack
        spacing={1}
        sx={{ flexGrow: 1 }}
      >
        <Typography variant="subtitle2">
        </Typography>
        <Paper
          sx={{
            backgroundColor: (theme) => theme.palette.mode === 'dark'
              ? 'neutral.800'
              : 'neutral.50',
            p: 2
          }}
          variant="outlined"
        >
          <Typography variant="body2">
            {comment.message}
          </Typography>
        </Paper>
        <Typography
          color="text.secondary"
          component="p"
          variant="caption"
        >
          {createdAt}
        </Typography>
      </Stack>
    </Stack>
  );
};

TaskComment.propTypes = {
  // @ts-ignore
  comment: PropTypes.objectOf(PropTypes.any).isRequired
};
