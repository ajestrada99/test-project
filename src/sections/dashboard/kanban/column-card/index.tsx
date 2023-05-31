import type { FC } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { useSelector } from '../../../../store';
import type { Column } from '../../../../types/kanban';
import { TaskAdd } from '../task-add';
// import { TaskCard } from '../task-card';
import { ColumnHeader } from './column-header';

// const useColumn = (columnId: string): Column | undefined => {
//   return useSelector((state) => {
//     const columns = state;

//     return columns.byId[columnId];
//   });
// };

interface ColumnCardProps {
  columnId: string;
  onClear?: () => void;
  onDelete?: () => void;
  onRename?: (name: string) => void;
  onTaskAdd?: (name?: string) => void;
  onTaskOpen?: (taskId: string) => void;
}

export const ColumnCard: FC<ColumnCardProps> = (props) => {
  return(
    <>
    </>
  )
};

ColumnCard.propTypes = {
  columnId: PropTypes.string.isRequired,
  onClear: PropTypes.func,
  onDelete: PropTypes.func,
  onRename: PropTypes.func,
  onTaskAdd: PropTypes.func,
  onTaskOpen: PropTypes.func
};
