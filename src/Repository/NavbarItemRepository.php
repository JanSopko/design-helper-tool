<?php

namespace App\Repository;

use App\Entity\NavbarItem;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method NavbarItem|null find($id, $lockMode = null, $lockVersion = null)
 * @method NavbarItem|null findOneBy(array $criteria, array $orderBy = null)
 * @method NavbarItem[]    findAll()
 * @method NavbarItem[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class NavbarItemRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, NavbarItem::class);
    }

    // /**
    //  * @return NavbarItem[] Returns an array of NavbarItem objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('n')
            ->andWhere('n.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('n.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?NavbarItem
    {
        return $this->createQueryBuilder('n')
            ->andWhere('n.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
